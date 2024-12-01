import { Container } from "@mantine/core";

export default function Schedule() {
  return (
    <section className="schedule h-[230px] bg-white">
      <Container size="lg">
        <div className="relative grid -translate-y-1/2 grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div>
            {/* single-schedule */}
            <div className="rounded-md bg-blue-500 p-8 transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-2xl">
              <div className="inner">
                <div className="icon">
                  <i className="fa fa-ambulance" />
                </div>
                <div className="single-content">
                  <span>Lorem Amet</span>
                  <h4>Emergency Cases</h4>
                  <p>
                    Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et
                    erat in lacus convallis sodales.
                  </p>
                  <a href="#">
                    LEARN MORE
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* single-schedule */}
            <div className="rounded-md bg-blue-500 p-8">
              <div className="inner">
                <div className="icon">
                  <i className="icofont-prescription" />
                </div>
                <div className="single-content">
                  <span>Fusce Porttitor</span>
                  <h4>Doctors Timetable</h4>
                  <p>
                    Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et
                    erat in lacus convallis sodales.
                  </p>
                  <a href="#">
                    LEARN MORE
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            {/* single-schedule */}
            <div className="rounded-md bg-blue-500 p-8">
              <div className="inner">
                <div className="icon">
                  <i className="icofont-ui-clock" />
                </div>
                <div className="single-content">
                  <span>Donec luctus</span>
                  <h4>Opening Hours</h4>
                  <ul className="time-sidual">
                    <li className="day">
                      Monday - Fridayp <span>8.00-20.00</span>
                    </li>
                    <li className="day">
                      Saturday <span>9.00-18.30</span>
                    </li>
                    <li className="day">
                      Monday - Thusday <span>9.00-15.00</span>
                    </li>
                  </ul>
                  <a href="#">
                    LEARN MORE
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
