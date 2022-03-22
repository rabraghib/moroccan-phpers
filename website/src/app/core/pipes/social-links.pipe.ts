import { Pipe, PipeTransform } from "@angular/core";
import { ILinks, ISocialLink } from "../modals";

@Pipe({
  name: "SocialLinks",
})
export class SocialLinksPipe implements PipeTransform {
  transform(links: ILinks): ISocialLink[] {
    return [
      ...Object.entries(links)
        .filter(([key]) => key !== "extra")
        .map(([key, value]) => {
          return {
            name: key.replace(/^\w/, (c) => c.toUpperCase()),
            url: value as string,
            icon: key,
          };
        }),
      ...(links.extra ?? []),
    ];
  }
}
