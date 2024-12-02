import { Container } from "@mantine/core";
import {
  IconAmbulance,
  IconArrowRight,
  IconClock,
  IconPrescription,
} from "@tabler/icons-react";
import React from "react";

export default function Schedule() {
  return (
    <section className="schedule h-[230px] bg-white">
      <Container size="lg">
        <div className="relative grid grid-cols-1 gap-7 md:-translate-y-1/2 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <SingleSchedule
              spanTag="Available Now"
              h3Tag="Doctors Timetable"
              pTag="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales"
              icon={<IconAmbulance size={150} stroke={2} />}
            />
          </div>
          <div>
            <SingleSchedule
              spanTag="Fusce Porttitor"
              h3Tag="Doctors Timetable"
              pTag="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et
                    erat in lacus convallis sodales."
              icon={<IconPrescription size={150} stroke={2} />}
            />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <SingleSchedule
              spanTag="Donec luctus"
              h3Tag="Opening Hours"
              pTag="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales"
              icon={<IconClock size={150} stroke={2} />}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

type ScheduleProps = {
  spanTag: string;
  h3Tag: string;
  pTag: string;
  icon: React.ReactNode;
};

const SingleSchedule = ({ spanTag, h3Tag, pTag, icon }: ScheduleProps) => {
  return (
    <div className="bg-primary overflow-hidden rounded-md p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-2xl">
      <div className="relative pr-20">
        <div className="absolute -bottom-16 -right-1/4 text-gray-300">
          {icon}
        </div>
        <div className="single-content">
          <span className="font-semibold">{spanTag}</span>
          <h4 className="my-4 text-2xl font-semibold">{h3Tag}</h4>
          <p className="mb-6 font-semibold">{pTag}</p>
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 font-semibold"
          >
            LEARN MORE
            <IconArrowRight size={20} />
            <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </div>
  );
};
