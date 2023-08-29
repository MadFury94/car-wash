export default defineNuxtRouteMiddleware(async (to, from) => {
  const isComingSoon = process.env.COMING_SOON === "true";

  if (isComingSoon) {
    if (to.path !== "/coming-soon") {
      return navigateTo("/coming-soon");
    }
  }



});
