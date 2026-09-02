import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const typingTexts = [
  "Fullstack Developer",
  "Learning DSA in C++",
  "Coder",
  "Exploring New skills",
];

const TypingText = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingTexts[phraseIndex];

    if (!isDeleting && text === currentPhrase) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const typingSpeed = isDeleting ? 70 : 110;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.slice(0, text.length + 1));
      } else {
        setText(currentPhrase.slice(0, text.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="text-blue-500 inline-block min-w-[120px] sm:min-w-[160px]">
      {text}
    </span>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ishan Thapar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am  </span>
            <TypingText />
            <span className="text-blue-500 animate-pulse">|</span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer Skilled in both front-end and back-end
            development, I specialize in the MERN stack and other modern
            technologies to create seamless user experiences and efficient
            solutions. And also exploring....
          </p>
          {/* Resume Button */}
          <a
            // href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #1d4ed8)",
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-2 border-blue-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ishan Thapar"
              className="w-full h-full rounded-full object-cover object-center drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)]"
              style={{ objectPosition: "center 10%" }}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
