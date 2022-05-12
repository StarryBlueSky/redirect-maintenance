addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(_request) {
  return Response.redirect('https://starry.blue/maintenance', 302)
}
