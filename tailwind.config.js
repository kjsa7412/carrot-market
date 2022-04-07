module.exports = {
  // 페이지 경로의 모든 폴더, 모든 파일 중에 js, jsx, ts, tsx 확장자를 가진 대상으로 Tailwind를 사용한 것을 찾아 낼 것이다.
  // 해당 경로에서 tailwind를 사용할 것이라고 tailwind에게 알려주기 위함
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
