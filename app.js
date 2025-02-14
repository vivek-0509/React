const API_KEY = 'ef8196f7287c4935bc352958251002';
const BASE_URL = 'https://api.weatherapi.com/v1';

const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const weatherInfo = document.getElementById('weather-info');
const weatherCard = document.querySelector('.weather-card');

const elements = {
  cityName: document.getElementById('city-name'),
  weatherDescription: document.getElementById('weather-description'),
  temperature: document.getElementById('temperature'),
  windSpeed: document.getElementById('wind-speed'),
  humidity: document.getElementById('humidity'),
  feelsLike: document.getElementById('feels-like'),
  sunrise: document.getElementById('sunrise'),
  sunset: document.getElementById('sunset')
};

function showLoading() {
  loadingElement.classList.remove('hidden');
  errorElement.classList.add('hidden');
  weatherInfo.classList.add('hidden');
}

function showError(message) {
  loadingElement.classList.add('hidden');
  errorElement.classList.remove('hidden');
  weatherInfo.classList.add('hidden');
  errorElement.textContent = message;
}

function showWeather() {
  loadingElement.classList.add('hidden');
  errorElement.classList.add('hidden');
  weatherInfo.classList.remove('hidden');
}

function formatTime(time) {
  return new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function updateBackground(condition) {
  weatherCard.dataset.weather = condition;
  document.body.style.background = getBackgroundGradient(condition);
}

function getBackgroundGradient(condition) {
  const gradients = {
    'Clear': 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    'Sunny': 'linear-gradient(135deg, #FF8C00, #FFD700)',
    'Partly cloudy': 'linear-gradient(135deg, #4B79A1, #283E51)',
    'Cloudy': 'linear-gradient(135deg, #616161, #9E9E9E)',
    'Overcast': 'linear-gradient(135deg, #373B44, #4286f4)',
    'Rain': 'linear-gradient(135deg, #000046, #1CB5E0)',
    'Light rain': 'linear-gradient(135deg, #3E5151, #DECBA4)',
    'Moderate rain': 'linear-gradient(135deg, #000046, #1CB5E0)',
    'Heavy rain': 'linear-gradient(135deg, #16222A, #3A6073)',
    'Snow': 'linear-gradient(135deg, #E6DADA, #274046)',
    'Thunder': 'linear-gradient(135deg, #090909, #232526)'
  };
  
  return gradients[condition] || gradients['Clear'];
}

function addWeatherAnimation(condition) {
  const animations = {
    'Rain': 'rain',
    'Light rain': 'rain',
    'Moderate rain': 'rain',
    'Heavy rain': 'rain',
    'Snow': 'snow',
    'Thunder': 'thunder'
  };

  const animationClass = animations[condition];
  if (animationClass) {
    weatherCard.classList.add(animationClass);
  } else {
    weatherCard.classList.remove('rain', 'snow', 'thunder');
  }
}

async function fetchWeather(city) {
  try {
    showLoading();
    
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    
    if (!response.ok) {
      throw new Error('City not found');
    }
    
    const data = await response.json();
    
    // Update UI with weather data
    elements.cityName.textContent = data.location.name;
    elements.weatherDescription.textContent = data.current.condition.text;
    elements.temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
    elements.windSpeed.textContent = `${data.current.wind_kph} km/h`;
    elements.humidity.textContent = `${data.current.humidity}%`;
    elements.feelsLike.textContent = `${Math.round(data.current.feelslike_c)}°C`;
    
    // Update background based on weather condition
    updateBackground(data.current.condition.text);
    addWeatherAnimation(data.current.condition.text);
    
    // Add hover effect listeners to weather items
    document.querySelectorAll('.weather-item').forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05) translateY(-5px)';
      });
      
      item.addEventListener('mouseout', () => {
        item.style.transform = 'none';
      });
    });
    
    showWeather();
  } catch (err) {
    showError(err.message === 'City not found' ? 'City not found' : 'Failed to fetch weather data');
  }
}

// Add input animation
cityInput.addEventListener('focus', () => {
  cityInput.parentElement.style.transform = 'scale(1.02)';
});

cityInput.addEventListener('blur', () => {
  cityInput.parentElement.style.transform = 'none';
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Add smooth transition when showing/hiding elements
document.querySelectorAll('.weather-item, .sun-times').forEach(element => {
  element.style.transition = 'all 0.3s ease';
});

// Fetch weather for London by default
fetchWeather('London');