export default defineEventHandler(async (event) => {
  // get auth-id from local storage

  console.log(event.headers.get("token"));

  // @ts-ignore
  return await $fetch("http://localhost:5620/v1/pulse");
});
