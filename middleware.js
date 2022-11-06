// middleware.js with Vercel CLI
export default function middleware(req, res) {
    let pid = req.url.split("/").pop();
    let url = req.url;
    let isFromFacebook = url.includes('fbclid=');
    if (isFromFacebook) {
        return Response.redirect(new URL(`https://www.hiptoro.com/?page_id=${pid}`))
    }
}
// config with custom matcher
export const config = {
    matcher: '/post/:path.html',
};