import { NextResponse } from "next/server";

export interface ResponseType {
  public_repos: number;
  followers: number;
  last_update: string;
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Token not configured" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch("https://api.github.com/users/retr0lbb", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub request failed" },
        { status: res.status },
      );
    }

    const data = await res.json();

    const payload: ResponseType = {
      public_repos: data.public_repos,
      followers: data.followers,
      last_update: data.updated_at,
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unexpected error occurred" },
      { status: 500 },
    );
  }
}
