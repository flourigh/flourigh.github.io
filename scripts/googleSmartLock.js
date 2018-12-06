  const hintPromise = googleyolo.hint({
    supportedAuthMethods: ["https://accounts.google.com"],
    supportedIdTokenProviders: [{uri: "https://accounts.google.com", clientId: "981138028764-lg0q4k4100dlh7r80cc40o28o6c21oon.apps.googleusercontent.com"}]})
  hintPromise.then((credential) => {
  if (credential.id) {
    console.log(credential.id)
    console.log(credential.displayName)
    console.log(credential.profilePicture)
  }})