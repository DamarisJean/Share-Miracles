

<p align="center">
    <a href="https://github.com/DamarisJean/Share-Miracles/actions"><img src="https://github.com/DamarisJean/Share-Miracles/workflows/tests/badge.svg" alt="Build Status"></a>
    <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
    <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
    <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Share-Miracles

Share-Miracles is a platform designed to create a supportive community where individuals can share their personal miracles. This project represents both a technical achievement and a personal passion.

## Technical Overview

- **Frontend**: Built with [React.js](https://reactjs.org/), styled with [Tailwind CSS](https://tailwindcss.com/).
- **Backend**: Powered by [Laravel 11](https://laravel.com/), a robust PHP framework.
- **Database**: Uses [MySQL](https://www.mysql.com/) for data storage.
- **Authentication**: Secure user authentication implemented with [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum).
- **Deployment**: Deployed on [Hostinger](https://www.hostinger.com/).

## Features

### Miracles Carousel

An interactive carousel that dynamically displays shared miracles using Framer Motion.

**Component Structure**:
- **MiraclesCarousel**: Main component.
- **MiracleItem**: Represents each miracle.
- **CarouselNavigation**: Navigation buttons.
- **CallToActionSection**: Encourages users to share their miracles.

### Displayed Miracles

Displays a list of shared miracles fetched from the backend.

**Component Structure**:
- **Miracles**: Main component.
- **useFetchMiracleById**: Custom hook for fetching miracle data.

### Create Miracle

Allows authenticated users to share their miracles through a form.

**Component Structure**:
- **CreateMiracle**: Handles form submission.
- **Images**: Component for image selection.
- **PrimaryButton**: Reusable button component.

### User Profile

Manages user profile information, password changes, and account deletion.

**Component Structure**:
- **UpdateProfileInformation**: Updates user profile.
- **UpdatePasswordForm**: Changes user password.
- **DeleteUserForm**: Deletes user account.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/DamarisJean/Share-Miracles.git
    cd Share-Miracles
    ```

2. Install dependencies:
    ```bash
    composer install
    npm install
    ```

3. Copy `.env.example` to `.env` and configure your environment variables:
    ```bash
    cp .env.example .env
    ```

4. Generate an application key:
    ```bash
    php artisan key:generate
    ```

5. Run the migrations:
    ```bash
    php artisan migrate
    ```

6. Serve the application:
    ```bash
    php artisan serve
    ```



## Contact

For any inquiries, you can reach me at [contact@share-miracles.com](mailto:contact@share-miracles.com).

---

<p align="center">
    <a href="https://www.linkedin.com/in/damaris-jjm" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a>
    <a href="https://github.com/DamarisJean" class="icon brands fa-github"><span class="label">GitHub</span></a>

</p>
