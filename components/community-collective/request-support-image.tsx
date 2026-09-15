import Image from "next/image";
import { requestSupportParentImage } from "@/data/site-images";

export function RequestSupportImage() {
  return (
    <section
      className="bg-cream"
      aria-labelledby="request-support-image-heading"
    >
      <div className="mx-auto max-w-3xl px-4 pb-5 sm:px-6 sm:pb-6 lg:px-10">
        <h2 id="request-support-image-heading" className="sr-only">
          Parent holding a sleeping newborn
        </h2>
        <div className="mx-auto w-full max-w-[16.5rem] sm:max-w-sm">
          <Image
            src={requestSupportParentImage}
            alt="Parent holding a sleeping newborn in a peaceful home setting."
            width={1600}
            height={1067}
            className="h-auto w-full rounded-2xl object-cover object-[32%_center] shadow-soft ring-1 ring-border-soft/60"
            sizes="(max-width: 640px) 264px, 384px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
