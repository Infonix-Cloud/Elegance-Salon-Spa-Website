# Elegance Salon & Spa Website

A professional multi-page salon website with elegant design, services catalog, and employment application form.

![Elegance Salon & Spa](static/assets/logo.svg)

## Overview

Elegance Salon & Spa is a fully responsive website designed for a professional beauty salon business. It features a modern, elegant design with a focus on showcasing beauty services with comprehensive information about treatments and employment opportunities.

## Features

- **Multi-page Structure**: Complete website with Home, Services, About, Contact, and Join Us pages
- **Responsive Design**: Fully responsive layout for all device sizes
- **Services Catalog**: Detailed listing of beauty services with pricing and descriptions
- **Contact Form**: User-friendly contact form for client inquiries
- **Job Application**: Comprehensive employment application form for potential employees
- **Modern UI**: Luxurious imagery, subtle animations, and intuitive navigation

## Technology Stack

- **Frontend**:
  - HTML5
  - CSS3
  - Vanilla JavaScript
  - Bootstrap 5
  - Font Awesome
  - Google Fonts (Playfair Display, Lato)

- **Backend**:
  - Python 3.11
  - Flask
  - Gunicorn
  - Flask-SQLAlchemy

## Color Scheme

- Primary: #2C3E50 (deep blue)
- Secondary: #E74C3C (coral)
- Accent: #F1C40F (gold)
- Background: #FFFFFF (white)
- Text: #34495E (charcoal)

## Project Structure

```
├── static/
│   ├── assets/
│   │   └── logo.svg
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── templates/
│   ├── about.html
│   ├── base.html
│   ├── contact.html
│   ├── index.html
│   ├── join_us.html
│   └── services.html
├── app.py
├── main.py
└── README.md
```

## Setup and Installation

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install dependencies
   ```
   pip install -r requirements.txt
   ```

3. Run the application
   ```
   python main.py
   ```
   or
   ```
   gunicorn --bind 0.0.0.0:5000 --reuse-port --reload main:app
   ```

4. Access the website at `http://localhost:5000`

## Future Enhancements

- Appointment booking functionality
- Gallery section with salon work portfolio
- Blog section for beauty tips and salon news
- Customer testimonials database integration
- Online payment processing for services

## Developer Information

This website was developed by Infonix Cloud.

- **Website**: [infonixcloud.vercel.app](https://infonixcloud.vercel.app)
- **Email**: [infonixcloud@gmail.com](mailto:infonixcloud@gmail.com)

## License

All rights reserved. This project is proprietary and confidential.

---

© 2025 Elegance Salon & Spa | Developed by Infonix Cloud