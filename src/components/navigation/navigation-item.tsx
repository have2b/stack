"use client";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/shared/action-tooltip";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-full transition-all w-1",
            params?.serverId !== id && "group-hover:h-5",
            params?.serverId === id ? "h-9" : "h-2"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-12 w-12 rounded-3xl group-hover:rounded-2xl transition-all overflow-hidden",
            params?.serverId === id && "bg-primary/10 text-primary rounded-2xl"
          )}
        >
          <Image
            src={imageUrl}
            alt="server-image"
            fill
            className="object-cover"
          />
        </div>
      </button>
    </ActionTooltip>
  );
};