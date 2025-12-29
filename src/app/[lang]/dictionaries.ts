import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  "en-US": () =>
    import("./dictionaries/en-US.json").then((module) => module.default),
  "pt-BR": () =>
    import("./dictionaries/pt-BR.json").then((module) => module.default),
};

export type JobExperience = {
  jobTitle: string;
  company: string;
  modelOfContractor: string;
  duration: string;
  keyPoints: string[];
};

export type Dicitionary = {
  navBar: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  heroSection: {
    subText: string;
  };
  aboutSection: {
    title: string;
    workExperience: {
      title: "Work Experience";
    };

    experience: JobExperience[];

    sideBar: string;
    bio: string;
    moreAbout: string;
    myProjectsButton: string;
  };
  historyTime: {
    "2015": {
      title: string;
      desc: string;
    };
    "2024": {
      title: string;
      desc: string;
    };
    "2050": {
      title: string;
      desc: string;
    };
  };
  projectsSection: {
    title: string;

    projects: {
      rubens: {
        shortDesc: string;
        subtitle: string;

        projectDevelopment: {
          title: string;
          text: string;
        };

        usedTech: string;

        repository: string;
      };
      fatecard: {
        shortDesc: string;
        subtitle: string;

        projectDevelopment: {
          title: string;
          text: string;
        };

        usedTech: string;

        repository: string;
      };
      jlj: {
        shortDesc: string;
        subtitle: string;

        projectDevelopment: {
          title: string;
          text: string;
        };

        usedTech: string;
      };
      nerd: {
        shortDesc: string;
        subtitle: string;

        projectDevelopment: {
          title: string;
          text: string;
        };

        usedTech: string;
        repository: string;
      };
      ht: {
        shortDesc: string;
        subtitle: string;

        whatIs: {
          title: string;
          text: string;
        };

        projectDevelopment: {
          title: string;
          text: string;
        };

        usedTech: string;
        repository: string;
      };
    };

    accordionButton: {
      seeMore: string;
      seeLess: string;
    };

    representativeText: string;
  };
  contactSection: {
    title: string;
    availableToWork: string;
  };
};

export const isValidLocale = (locale: string): locale is Locale => {
  return locale in dictionaries;
};

export const getDictionary = async (locale: Locale): Promise<Dicitionary> => {
  return dictionaries[locale]() as any;
};
