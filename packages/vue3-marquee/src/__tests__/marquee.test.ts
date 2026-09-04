import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vite-plus/test";
import { h } from "vue";
import MarqueeDefault, { Marquee } from "../index";

const slots = { default: () => [h("span", "a"), h("span", "b")] };
const tracks = (wrapper: ReturnType<typeof mount>) => wrapper.findAll(":scope > div");

describe("Marquee", () => {
  it("exposes the same component as named and default export", () => {
    expect(Marquee).toBe(MarqueeDefault);
  });

  it("repeats the slot numberOfCopies times", () => {
    const wrapper = mount(Marquee, { slots, props: { numberOfCopies: 3 } });
    const copies = tracks(wrapper);
    expect(copies).toHaveLength(3);
    for (const copy of copies) expect(copy.text()).toBe("ab");
  });

  it("scrolls horizontally by default and vertically with direction=up", () => {
    const left = mount(Marquee, { slots });
    expect(left.classes()).toContain("flex-row");
    expect(tracks(left)[0]!.classes()).toContain("animate-marquee-left");

    const up = mount(Marquee, { slots, props: { direction: "up" } });
    expect(up.classes()).toContain("flex-col");
    expect(tracks(up)[0]!.classes()).toContain("animate-marquee-up");
  });

  it("applies reverse and pauseOnHover to every track", () => {
    const wrapper = mount(Marquee, { slots, props: { reverse: true, pauseOnHover: true } });
    for (const track of tracks(wrapper)) {
      expect(track.classes()).toContain("direction-reverse");
      expect(track.classes()).toContain("group-hover:paused");
    }
  });

  it("masks the edges only when fade is set", () => {
    const plain = mount(Marquee, { slots });
    expect(plain.attributes("style")).toBeUndefined();

    const faded = mount(Marquee, { slots, props: { fade: true, direction: "up" } });
    expect(faded.attributes("style")).toContain("mask-image");
    expect(faded.attributes("style")).toContain("to bottom");
  });

  it("merges class with Tailwind conflict resolution and forwards other attrs", () => {
    const wrapper = mount(Marquee, {
      slots,
      props: { innerClassName: "gap-8" },
      attrs: { class: "gap-12", id: "ticker", "aria-label": "News" },
    });
    expect(wrapper.classes()).toContain("gap-12");
    expect(wrapper.classes()).not.toContain("gap-4");
    expect(wrapper.attributes("id")).toBe("ticker");
    expect(wrapper.attributes("aria-label")).toBe("News");

    const track = tracks(wrapper)[0]!;
    expect(track.classes()).toContain("gap-8");
    expect(track.classes()).not.toContain("gap-4");
    expect(track.attributes("id")).toBeUndefined();
  });
});
