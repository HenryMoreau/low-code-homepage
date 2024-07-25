// script.js

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
    // 检查本地存储中是否有用户之前选择的主题
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark') {
      document.body.classList.add('dark-theme');
      themeIcon.classList.replace('fa-sun', 'fa-moon'); // 设置图标为月亮
    } else if (currentTheme == 'light') {
      document.body.classList.remove('dark-theme');
      themeIcon.classList.replace('fa-moon', 'fa-sun'); // 设置图标为太阳
    } else if (prefersDarkScheme.matches) {
      document.body.classList.add('dark-theme');
      themeIcon.classList.replace('fa-sun', 'fa-moon'); // 设置图标为月亮
    }
  
    // 添加切换按钮的点击事件监听器
    themeToggle.addEventListener('click', function () {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // 切换图标为太阳
      } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // 切换图标为月亮
      }
    });
  });
  