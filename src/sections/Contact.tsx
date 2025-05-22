import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const Contact = () => {
  return (
    <section className="pb-16 lg:py-24" id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Ready When You Are"
          description="Big ideas start with a simple hello. Reach out and let's get started."
        />

        <form
          className="flex flex-col items-center text-sm mt-10"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="d33357aa-3d01-43fc-b12f-db32349ff096"
          ></input>

          <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
            <div className="w-full uppercase">
              <label className="text-sm font-semibold">Full Name</label>
              <Card className="mt-4 rounded-xl after:rounded-xl">
                <input
                  className="w-full h-12 p-8 outline-none bg-transparent"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  required
                />
              </Card>
            </div>

            <div className="w-full">
              <label className="text-sm font-semibold uppercase">
                Email Address
              </label>
              <Card className="mt-4 rounded-xl after:rounded-xl">
                <input
                  className="w-full h-12 p-8 outline-none bg-transparent"
                  type="email"
                  placeholder="johndoe@example.com"
                  name="email"
                  required
                />
              </Card>
            </div>
          </div>

          <div className="mt-6 w-[350px] md:w-[700px]">
            <label className="text-sm font-semibold uppercase">Message</label>
            <Card className="mt-4 rounded-xl after:rounded-xl">
              <textarea
                className="w-full h-64 p-6 resize-none outline-none bg-transparent"
                placeholder="Type here..."
                name="message"
                required
              ></textarea>
            </Card>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 mt-6 px-6 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-4"
            >
              {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
              <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
            </svg>

            <span className="font-semibold">Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
