export async function POST(req: Request) {
  return new Response(
    JSON.stringify({
      message: "Hello from Discord API",
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
