
/* Routers */
function getWindowLocationSearch () {
    return (window.location.search.substring(window.location.search.indexOf('?') + 1)).toLowerCase() }

if (getWindowLocationSearch() === 'facebook') {
    location.assign('https://facebook.com/flourighcom') }

if (getWindowLocationSearch() === 'instagram') {
    location.assign('https://instagram.com/flourigh') }

if (getWindowLocationSearch() === 'twitter') {
    location.assign('https://twitter.com/flourigh') }

if (getWindowLocationSearch() === 'linkedin') {
    location.assign('https://linkedin.com/in/flourigh') }

if (getWindowLocationSearch() === 'youtube') {
    location.assign('https://youtube.com/flourigh') }

if (getWindowLocationSearch() === 'google') {
    location.assign('https://goo.gl/maps/4ZaDjctKe7S2') }

if (getWindowLocationSearch() === 'plus') {
    location.assign('https://google.com/+robertomonteiro') }

if (getWindowLocationSearch() === 'whatsapp') {
    location.assign('https://wa.me/5521986762331') }

if (getWindowLocationSearch() === 'about') {
    location.assign('https://about.me/flourigh') }

if (getWindowLocationSearch() === 'curriculo') {
    location.assign('https://flourigh.github.io/curriculo') }

if (getWindowLocationSearch() === 'qrcode') {
    location.assign('https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=') }

if (getWindowLocationSearch() === 'booking') {
    location.assign('https://calendar.google.com/calendar?cid=dDNwcWsxbWRuZWEybTZ2aWszZjZzMHZodTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ') }

if (getWindowLocationSearch() === 'stackoverflow') {
    location.assign('https://pt.stackoverflow.com/users/8939') }

if (getWindowLocationSearch() === 'snapchat') {
    location.assign('https://snapchat.com/add/flourigh') }

console.log(getWindowLocationSearch())
/* Routers */