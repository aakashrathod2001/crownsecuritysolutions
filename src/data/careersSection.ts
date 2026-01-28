export interface Job {
  id: string;
  title: string;
  location: string;
  experience: string;
  description: string;
}

export interface ApplicationData {
  // Step 1: Personal Identity
  surname: string;
  firstName: string;
  middleName: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  age: string;
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
  
  // Step 2: Contact & Address
  mobileNumber: string;
  alternateNumber: string;
  presentAddress: string;
  permanentAddress: string;
  permanentAddressSameAsPresent: boolean;
  height: string;
  weight: string;
  chest: string;
  qualification: string;
  
  // Step 3: Work Experience & Skills
  previousESIC: string;
  previousUAN: string;
  residentialExperience: string;
  commercialExperience: string;
  industrialExperience: string;
  languages: {
    english: LanguageSkills;
    hindi: LanguageSkills;
    marathi: LanguageSkills;
  };
  skills: {
    fireFighting: boolean;
    safety: boolean;
    firstAid: boolean;
    driving: boolean;
    computer: boolean;
  };
  
  // Step 4: Bank & Documents
  nameOnAadhar: string;
  aadharNumber: string;
  panNumber: string;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  branchAddress: string;
  profilePhoto: File | null;
  resume: File | null;
}

export interface LanguageSkills {
  speak: boolean;
  read: boolean;
  write: boolean;
}