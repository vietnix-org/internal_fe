<template>
    <div class="content-area p-4 h-full dark:bg-gray-800 bg-light-blue">
      <h1 class="text-2xl font-bold mb-4">User Management</h1>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200 table-fixed rounded-lg overflow-hidden hover">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Logged In
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200" style="max-height: 400px; overflow-y: auto;">
            <tr v-for="user in users" :key="user.username">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ user.username }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ user.type }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ user.lastLoggedIn }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px">
                  Suspend this user
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
        <a class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px"
          href="#">
          Add a new user
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminPanel',
    data() {
      return {
        users: [
          { username: 'testuser1', type: 'Admin', lastLoggedIn: '2024-06-28 12:00' },
          { username: 'user2', type: 'User', lastLoggedIn: '2024-06-28 08:45' },
          { username: 'admin3', type: 'Admin', lastLoggedIn: '2024-06-27 14:30' },
          { username: 'user4', type: 'User', lastLoggedIn: '2024-06-27 09:10' },
          { username: 'user5', type: 'User', lastLoggedIn: '2024-06-26 15:20' },
          { username: 'testuser1', type: 'Admin', lastLoggedIn: '2024-06-28 12:00' },
          { username: 'user2', type: 'User', lastLoggedIn: '2024-06-28 08:45' },
          { username: 'admin3', type: 'Admin', lastLoggedIn: '2024-06-27 14:30' },
          { username: 'user4', type: 'User', lastLoggedIn: '2024-06-27 09:10' },
          { username: 'user5', type: 'User', lastLoggedIn: '2024-06-26 15:20' },
          { username: 'testuser1', type: 'Admin', lastLoggedIn: '2024-06-28 12:00' },
          { username: 'user2', type: 'User', lastLoggedIn: '2024-06-28 08:45' },
          { username: 'admin3', type: 'Admin', lastLoggedIn: '2024-06-27 14:30' },
          { username: 'user4', type: 'User', lastLoggedIn: '2024-06-27 09:10' },
          { username: 'user5', type: 'User', lastLoggedIn: '2024-06-26 15:20' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  .content-area {
    background-color: #f0f4f8; 
  }
  </style>
  