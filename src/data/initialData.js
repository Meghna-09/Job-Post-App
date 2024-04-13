import { nanoid } from "nanoid";

export const initialFormFields = {
    id: nanoid(),
    job_title: "",
    is_active: false,
    introduction: "",
    roles_responsibilities: "",
    min_exp: "",
    max_exp: "",
    qualifications: "",
    salary: "",
    conclusion: "",
    company: "",
    job_location: "",
    job_types: "",
    job_labels: []
};

export const initialCheckedFields = {
    id: nanoid(),
    job_title: false,
    introduction: false,
    roles_responsibilities: false,
    experience: false,
    qualifications: false,
    salary: false,
    conclusion: false,
    company: false,
    job_location: false,
    job_types: false,
    job_labels: false
  }