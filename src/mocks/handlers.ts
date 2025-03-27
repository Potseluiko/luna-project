import { http, delay, HttpResponse, HttpHandler } from "msw"
import { TSignInPayload } from "../features/currentUser/currentUserTypes"

export const handlers: HttpHandler[] = [
  http.get("/*", async (): Promise<void> => {}),

  http.post<any, TSignInPayload>("/api/signin", async ({ request }): Promise<Response> => {
    let nextPost: TSignInPayload

    try {
      nextPost = await request.json()
    } catch (error) {
      return HttpResponse.error()
    }

    const { email, password } = nextPost

    await delay(1000)

    if (email === "demo@demo.com" && password === "demo") {
      return HttpResponse.json(
        {
          id: "fr01-sdfw-grev-qwd73",
          name: "Demo User",
          email: "demo@demo.com",
        },
        {
          status: 200,
        }
      )
    }

    if (email === "error@error.com" && password === "error") {
      return HttpResponse.error()
    }

    return HttpResponse.json(
      {
        code: "USER_NOT_FOUND",
        message: "Invalid email or password",
      },
      {
        status: 401,
      }
    )
  }),
]
