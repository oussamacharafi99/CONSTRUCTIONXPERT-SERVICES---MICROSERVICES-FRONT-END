// src/app/models/project.model.ts

export interface Project {
  // projectId: number;                  
  // projectName: string;                
  // projectDescription: string;         
  // projectStartDate: Date;             
  // projectEndDate: Date;               
  // projectCost: number; 
  
  id: number; // Maps to @Id and @GeneratedValue
  name: string; // Maps to @Column(name = "name")
  budget: number; // Maps to @Column(name = "budget")
  heurs: string; // Maps to @Column(name = "heurs") and LocalTime (string representation)
  startDate: string; // Maps to @Column(name = "startDate") and LocalDate (string representation)
  endDate: string; // Maps to @Column(name = "endDate") and LocalDate (string representation)
  description: string; 
}

