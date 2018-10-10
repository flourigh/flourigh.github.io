addEventListener('fetch', event => { event.respondWith(handleRequest(event.request)) })
async function handleRequest(request) {
	let url = new URL(request.url)

	if (url.pathname.startsWith("/facebook" || "/facebook/")) {
		url.href = "https://facebook.com/flourighcom"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/instagram" || "/instagram/")) {
		url.href = "https://instagram.com/flourigh"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/twitter" || "/twitter/")) {
		url.href = "https://twitter.com/flourigh"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/linkedin" || "/linkedin/")) {
		url.href = "https://linkedin.com/in/flourigh"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/youtube" || "/youtube/")) {
		url.href = "https://youtube.com/flourigh"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/google" || "/google/")) {
		url.href = "https://goo.gl/maps/4ZaDjctKe7S2"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/plus" || "/plus/")) {
		url.href = "https://google.com/+robertomonteiro"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/whatsapp" || "/whatsapp/")) {
		url.href = "https://wa.me/5521986762331"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/about" || "/about/")) {
		url.href = "https://about.me/flourigh"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/curriculo" || "/curriculo/")) {
		url.href = "https://flourigh.github.io/curriculo"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/firebase-messaging-sw.js")) {
		url.href = "https://flourigh.github.io/scripts/subscribers/firebase-messaging-sw.js"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/qrcode" || "/qrcode/")) {
    url.href = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="
    return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/booking" || "/booking/")) {
		url.href = "https://calendar.google.com/calendar?cid=dDNwcWsxbWRuZWEybTZ2aWszZjZzMHZodTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/l2r" || "/l2r/")) {
		url.href = "https://ticket2.netmarble.com/ver2/view/lin2ws/5wMiMs6ck7_88x92kypCTn4"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/cloudflareworker" || "/cloudflareworker/")) {
		url.href = "https://cloudflareworkers.com/#d6cfced1cd8bd1260c41342c8b62e704"
		return Response.redirect(url, 301) }

	if (url.pathname.startsWith("/azeoka" || "/azeoka/")) {
		url.href = "http://forum.netmarble.com/lin2ws_pt/profile/29479928"
		return Response.redirect(url, 301) }

	const response = await fetch(request)
	return response }
