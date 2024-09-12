import { TaskStatus } from "../enums/TaskStatus";
import { Project } from "./project";

export interface Task {
  // taskId: number;                   
  // taskName: string;                 
  // taskDescription: string;          
  // taskStart: Date;                  
  // taskEnd: Date;                    
  // taskStatus: TaskStatus;           
  // project_id: number;              
  // project?: Project;  
  
  
  
    id: number; // Maps to @Id and @GeneratedValue
    project_id: number | null; // Maps to Integer project_id (nullable)
    heurs: string; // Maps to @Column(name = "heurs") and LocalTime (string representation)
    startDate: string; // Maps to @Column(name = "startDate") and LocalDate (string representation)
    endDate: string; // Maps to @Column(name = "endDate") and LocalDate (string representation)
    status: string; // Maps to @Column(name = "status")
    description: string; // Maps to @Column(name = "description")
    project?: Project; 
}


