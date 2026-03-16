import type { Dicitionary } from "@/app/[lang]/dictionaries";
import { type ColorOfDivision, Divider } from "@/components/divider";
import { ContactItem } from "@/components/ContactItem";
import { IoTerminal } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";

interface ContactPageProps {
  dict: Dicitionary;
  color: ColorOfDivision;
}
export function ContactPage({ color }: ContactPageProps) {
  return (
    <section
      className="w-full min-h-dvh bg-zinc-950 flex flex-col p-2"
      id="contact"
    >
      <Divider color={color} />

      <div className="flex flex-1 flex-col items-center">
        <div className="w-full px-2 md:px-0 md:w-3xl lg:w-5xl min-h-full flex flex-1 justify-center flex-col gap-4 md:gap-20">
          <div className="flex items-center justify-center gap-6 px-2 lg:px-10">
            <div className="h-0.5 rounded-l-full w-full bg-zinc-200/30" />
            <p className="text-xl md:text-3xl font-bold font-code text-zinc-200">
              ACTIVE_LINKS
            </p>
            <div className="h-0.5 rounded-r-full w-full bg-zinc-200/30" />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:gap-8 pt-6">
            <ContactItem
              Icon={IoTerminal}
              name="GitHub"
              subtext="github.com/retr0lbb"
              hiddenText="github.sh --open"
              link="https://github.com/retr0lbb"
            />
            <ContactItem
              Icon={FaLink}
              name="LinkedIn"
              subtext="/in/henrique-barbosa-sampaio"
              hiddenText="social.lnk --connect hbs"
              link="https://www.linkedin.com/in/henrique-barbosa-sampaio/"
            />
            <ContactItem
              Icon={IoMdMail}
              name="Email"
              subtext="retr0lbb@gmail.com"
              hiddenText="send_mail.exe --retr0lbb@gmail.com"
              link="mailto:henrique.sampaio.barbosa@email.com?subject=Contato&body=Olá%20Henrique"
            />
            <ContactItem
              Icon={MdMessage}
              name="WhatsApp"
              subtext="+55 11 99942-9345"
              hiddenText="wpp message --me"
              link="https://wa.me/5511999429345"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
