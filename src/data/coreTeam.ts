// coreTeam.data.ts

/**
 * Represents a team member
 */
export interface TeamMember {
  /**
   * Unique identifier for the team member
   */
  id: string;

  /**
   * Full name of the team member
   */
  name: string;

  /**
   * Position/role of the team member
   */
  position: string;

  /**
   * Path to the team member's image
   */
  image: string;

  /**
   * Whether this is a core team member (larger card)
   */
  isCore: boolean;
}

/**
 * Core team data for Crown Securities
 */
export const coreTeamData: TeamMember[] = [
  {
    id: "tanveer-shaikh",
    name: "Late Mr. Tanveer Shamnameer Shaikh",
    position: "Founder",
    image: "/images/team/tanveer-shaikh.png",
    isCore: true,
  },
  {
    id: "nadir-shaikh",
    name: "Mr. Nadir Tanveer Shaikh",
    position: "Managing Director",
    image: "/images/team/nadir-shaikh.png",
    isCore: true,
  },
  {
    id: "hillol-nag",
    name: "Mr. Hillol Nag",
    position: "Head of Department",
    image: "/images/team/hillol-nag.png",
    isCore: true,
  },
  {
    id: "sadanand-palande",
    name: "Mr. Sadanand Palande",
    position: "Sr. Operations Manager",
    image: "/images/team/sadanand-palande.png",
    isCore: false,
  },
  {
    id: "ramchandra-karande",
    name: "Mr. Ramchandra Karande",
    position: "Sr. Operations Manager",
    image: "/images/team/ramchandra-karande.png",
    isCore: false,
  },
  {
    id: "abdul-rahim-shaikh",
    name: "Mr. Abdul Rahim Shaikh",
    position: "Sr. Operations Manager",
    image: "/images/team/abdul-rahim-shaikh.png",
    isCore: false,
  },
  {
    id: "mazhar-mulla",
    name: "Mr. Mazhar Mulla",
    position: "HR & Operations Manager",
    image: "/images/team/mazhar-mulla.png",
    isCore: false,
  },
  {
    id: "tukaram-patil",
    name: "Mr. Tukaram Patil",
    position: "Sr. Training Manager",
    image: "/images/team/tukaram-patil.png",
    isCore: false,
  },
  {
    id: "satyakumar-dhavse",
    name: "Mr. Satyakumar Dhavse",
    position: "Sr. Operations Manager",
    image: "/images/team/satyakumar-dhavse-7ebd15.png",
    isCore: false,
  },
  {
    id: "mithun-pal",
    name: "Mr. Mithun Pal",
    position: "Operations Manager",
    image: "/images/team/mithun-pal-6e2737.png",
    isCore: false,
  },
  {
    id: "ts-srinivas",
    name: "Mr. T.S. Srinivas",
    position: "Sr. Operations Manager",
    image: "/images/team/ts-srinivas-54f041.png",
    isCore: false,
  },
];

/**
 * Company information for team section
 */
export const teamSectionInfo = {
  title: "Our Core Team",
  highlightedWords: [""],
};
