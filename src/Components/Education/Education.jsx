import { education } from "../../Constants";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gradient-to-r from-blue-900/20 to-blue-950/20 border border-blue-500/30 rounded-lg p-4 sm:p-6 backdrop-blur"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400">{edu.school}</p>
                  {edu.university && (
                    <p className="text-sm text-blue-300 mt-1">
                      {edu.university}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">{edu.date}</p>
                  <p className="text-blue-300 font-semibold mt-2">
                    CGPA: {edu.grade ?? edu.CGPA ?? edu.cgpa}
                  </p>
                  <p className="text-gray-300 mt-3">{edu.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
