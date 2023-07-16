"use client";
import { DetailUser } from "@/model/user";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Link from "next/link";
import Avatar from "./Avatar";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  const following = data?.following;

  console.log(following);

  return (
    <section>
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!following || following.length === 0) && (
          <p>{`You don't have following`}</p>
        )
      )}
      {following && following.length > 0 && (
        <ul>
          {following.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avatar image={image} highlight />
                <p>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
