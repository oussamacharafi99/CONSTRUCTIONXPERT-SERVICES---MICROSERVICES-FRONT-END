
export interface Resource {
  // resourceId: number;                
  // resourceName: string;              
  // resourceType: string;              
  // quantity: number;                  
  // providerInformation: string;       
  // task_id: number;                   
  // task?: Task;    
  
  id: number; // Maps to @Id and @GeneratedValue
  task_id: number | null; // Maps to Integer task_id (nullable)
  resourceName: string; // Maps to @Column(name = "Resource_Name")
  resourceType: string; // Maps to @Column(name = "Resource_Type")
  startDate: string; // Maps to @Column(name = "Date") and LocalDate (string representation)
  task?: Task;
}