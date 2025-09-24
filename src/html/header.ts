export const header = `
  <header class="fixed top-0 left-0 right-0 h-16 flex items-center px-6 z-20">
  <div class="container mx-auto flex items-center justify-between px-6 py-3 min-h-[80px]">
    <!-- Logo -->
    <a href="/ui" class="flex items-center space-x-2">
      <img src="https://uicdn.funxdata.com/assets/logo.png" alt="Logo" class="h-8" />
      <span class="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">GUI</span>
    </a>
   <div class="flex items-center space-x-6">
    <nav class="flex items-center space-x-6">
      <a href="/ele" class="hover:text-green-600">ui</a>
      <a href="/themes" class="hover:text-green-600">themes</a>
      <a href="/icons" class="hover:text-green-600">icons</a>
    </nav>
    <!-- 右侧 Github + Toggle -->
    <div class="flex items-center space-x-4">
      <a href="https://github.com/funxdata/stylesheet" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="size-6 fill-slate-900"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
      </a>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id="themeToggle" class="sr-only peer" />
        <div class="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-green-500 transition"></div>
        <div class="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition"></div>
      </label>
    </div>
  </div>
</div>
</header>
`
