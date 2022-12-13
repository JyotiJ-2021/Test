import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
  projectId: "5yilc0we",
  dataset: "production",
  useCdn: true,
  apiVersion: "1",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
