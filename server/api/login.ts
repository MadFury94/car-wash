export default defineEventHandler(async (event) => {
  let body: any = await readBody(event);

/*
  if (body instanceof Uint8Array) {
    body = JSON.parse(new TextDecoder().decode(body));
  }
*/

  if (!body) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad request",
    });
  }

  if (body.token) {
    setCookie(event, "auth-token", body.token);
  }

  if (body.data) {
    setCookie(event, "current-user", JSON.stringify(body.data));
  }

  return {
    message: "Login Successful",
  };
});
