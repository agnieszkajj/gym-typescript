import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Htext from "../../shared/Htext";
import { BenefitType } from "../../shared/types";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphics from "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"></HomeModernIcon>,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"></UserGroupIcon>,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"></AcademicCapIcon>,
    title: "Expert of Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*Header*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" md:my-5 md:w-3/5"
        >
          <Htext>More than just a gym.</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum,
            perspiciatis minus assumenda nostrum nisi numquam laborum corrupti
            accusantium excepturi possimus expedita cum libero pariatur
          </p>
        </motion.div>
        {/*Benefits*/}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              ></Benefit>
            );
          })}
        </div>
        {/*Graphics and description*/}
        <div className="mt-16 justify-between gap-20 md:mt-28 md:flex">
          {/*Graphics*/}
          <img
            className="mx-auto"
            alt="benefits-page-graphics"
            src={BenefitsPageGraphics}
          />
          {/*description*/}
          <div>
            {/* title*/}
            <div className="relative">
              <div className="before:-top:20 before:absolute before:-left-20 before:z-[-10] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 2 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/*description*/}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                necessitatibus! Eius veritatis hic labore, mollitia, fuga
                dolores assumenda error magnam excepturi sapiente harum non nam
                tempore maxime, nisi accusamus a. Repellendus sed reprehenderit
                commodi nemo ea mollitia aperiam incidunt asperiores qui, et ut
                aliquam ullam sapiente animi temporibus, cupiditate optio.
              </p>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sequi laudantium neque similique debitis cum, officia
                accusantium praesentium suscipit laboriosam omnis quidem
                perferendis possimus consequuntur ratione quod! Voluptates,
                quibusdam nobis?
              </p>
            </motion.div>
            {/*button*/}
            <div className="relative mt-16">
              <div className="before:z[-10] before:absolute before:-bottom-20 before:right-40 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
