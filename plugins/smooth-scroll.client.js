// export default defineNuxtPlugin(() => {
//   if (process.client) {
//     window.addEventListener('wheel', (e) => {
//       // Only act on vertical scrolling
//       if (e.deltaY !== 0) {
//         e.preventDefault()
//         // Reduce the scroll offset (e.g., 0.5 for half, 0.3 for even less)
//         const scale = 3
//         window.scrollBy({ top: e.deltaY * scale, left: 0, behavior: 'auto' })
//       }
//     }, { passive: false })
//   }
// }) 