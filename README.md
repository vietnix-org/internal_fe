# Table of Contents

1. [internal_frontend](#internal_frontend)
2. [Recommended IDE Setup](#recommended-ide-setup)
3. [Customise Configuration](#customise-configuration)
4. [Project Setup](#project-setup)
5. [Development](#development)
6. [Production Build](#production-build)
7. [How it Works: Your Development Guidelines](#how-it-works-your-development-guidelines)
   - [Component Structure](#component-structure)
     - [Create/Modify .vue Files](#create/modify-vue-files)
     - [Integrate into Content View](#integrate-into-content-view)
   - [Media Organization](#media-organization)
     - [Images](#images)
     - [Plugins](#plugins)
8. [Future Plans: Backend Integration](#future-plans-backend-integration)
   - [When the Backend is Available](#when-the-backend-is-available)
     - [Authentication First](#authentication-first)
     - [Independent Services](#independent-services)
   - [Important Note](#important-note)


# internal_frontend

Using Vue3 template and Tailwind CSS, this project initialise frond-end service for Vietnix's internal dashboard.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customise Configuration

For advanced tweaks, see the [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```bash
npm install 
```

## Development

```bash
npm run dev
```
This starts the development server with hot-reloading.

## Production Build

```bash
npm run build
```
This creates an optimised production build.

# How it Works: Your Development Guidelines

## Component Structure

### Create/Modify .vue Files
- Each new function resides in its own .vue file within the `src/components/Content/Function_group_name/Function_name.vue` structure.

### Integrate into Content View
- In `src/views/Content.vue`, add the component's `<route-view>` element.
- Import the component in the `viewComponents` section of this file.
- Set a clear title for the function in the `titles` array.

## Media Organisation

### Images
- Store all images within subdirectories of `src/images`.

### Plugins
- Store all plugins within subdirectories of `src/plugins`.

## Future Plans: Backend Integration

### When the Backend is Available

#### Authentication First
- Implement an authentication service with JWT for security.
- Move sensitive variables into a `.env` file.

#### Independent Services
- Develop services separately for resilience.
- If a service crashes (except authentication), the embedded content area will simply remain empty.

### Important Note
- Unit and end-to-end (E2E) tests have not yet been implemented.