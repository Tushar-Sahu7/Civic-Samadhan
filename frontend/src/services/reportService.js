// Simulated backend service for reporting issues

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generate random report ID
const generateReportId = () => {
  return `RPT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

// Simulate file upload
export const uploadPhoto = async (file) => {
  await delay(1500); // Simulate upload time

  // Validate file size (5MB max)
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('File size exceeds 5MB limit');
  }

  // Validate file type
  if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
    throw new Error('Only JPG and PNG files are supported');
  }

  // Create object URL for preview
  const imageUrl = URL.createObjectURL(file);

  return {
    id: `img_${Date.now()}`,
    url: imageUrl,
    filename: file.name,
    size: file.size,
    type: file.type
  };
};

// Simulate geolocation detection
export const detectLocation = async () => {
  await delay(2000); // Simulate geolocation delay

  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Simulate reverse geocoding
          setTimeout(() => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              address: `${Math.floor(Math.random() * 999) + 1} Main Street, City, State 12345`
            });
          }, 1000);
        },
        (error) => {
          reject(new Error('Unable to detect location. Please enter address manually.'));
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};

// Simulate report submission
export const submitReport = async (reportData) => {
  await delay(2500); // Simulate processing time

  // Basic validation
  if (!reportData.category || !reportData.description) {
    throw new Error('Category and description are required');
  }

  if (!reportData.address && !reportData.location) {
    throw new Error('Please provide either an address or detect your location');
  }

  // Simulate successful submission
  const reportId = generateReportId();
  const submissionTime = new Date().toISOString();

  return {
    success: true,
    reportId,
    submissionTime,
    status: 'submitted',
    estimatedResponseTime: '2-3 business days',
    trackingUrl: `/track/${reportId}`,
    assignedDepartment: getDepartmentByCategory(reportData.category),
    priority: getPriorityByCategory(reportData.category)
  };
};

// Helper function to assign department based on category
const getDepartmentByCategory = (category) => {
  const departments = {
    'road repair': 'Public Works Department',
    'streetlight': 'Electrical Department',
    'waste management': 'Sanitation Department',
    'water supply': 'Water Department',
    'traffic': 'Traffic Management',
    'parks': 'Parks & Recreation',
    'noise': 'Environmental Department',
    'default': 'General Services'
  };

  const lowerCategory = category.toLowerCase();
  for (const [key, dept] of Object.entries(departments)) {
    if (lowerCategory.includes(key)) {
      return dept;
    }
  }
  return departments.default;
};

// Helper function to assign priority based on category
const getPriorityByCategory = (category) => {
  const highPriority = ['water supply', 'emergency', 'safety', 'traffic'];
  const mediumPriority = ['road repair', 'streetlight', 'waste management'];

  const lowerCategory = category.toLowerCase();

  if (highPriority.some(priority => lowerCategory.includes(priority))) {
    return 'High';
  } else if (mediumPriority.some(priority => lowerCategory.includes(priority))) {
    return 'Medium';
  }
  return 'Low';
};