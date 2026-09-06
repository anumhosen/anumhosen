export const researchData = {
  title: "Research & Scientific Computing",
  project: "Molecular Dynamics Simulation of E. coli Membrane",
  institution: "Jashore University of Science and Technology",
  department: "Department of Physics",
  abstract: "Investigating the biophysical stability, lipid-bilayer dynamics, and molecular interactions of the Escherichia coli outer and inner membrane systems using all-atom Molecular Dynamics simulations.",
  tools: [
    { name: "GROMACS", role: "High-Performance MD Engine", icon: "SiLinux" },
    { name: "CHARMM-GUI", role: "Membrane System Builder", icon: "FaDna" },
    { name: "Linux", role: "HPC Execution Environment", icon: "FaLinux" },
    { name: "Python", role: "Trajectory & Data Analysis", icon: "FaPython" }
  ],
  timeline: [
    {
      phase: "Phase 1",
      title: "System Preparation & Membrane Modeling",
      description: "Assembled heterogeneous asymmetrical lipid bilayers representing the E. coli inner and outer membranes using CHARMM-GUI Membrane Builder with physiological ion concentrations.",
      toolsUsed: ["CHARMM-GUI", "PDB Tools"],
      status: "Completed"
    },
    {
      phase: "Phase 2",
      title: "Solvation & Energy Minimization",
      description: "Embedded system in explicit TIP3P water molecules, added neutralizing counter-ions (K+/Cl-), and performed steepest-descent energy minimization to eliminate steric clashes.",
      toolsUsed: ["GROMACS", "Linux Shell"],
      status: "Completed"
    },
    {
      phase: "Phase 3",
      title: "NVT & NPT Equilibration",
      description: "Conducted constant volume (NVT) and constant pressure (NPT) ensembles with position restraints on heavy lipid atoms to stabilize temperature (310 K) and pressure (1 bar).",
      toolsUsed: ["GROMACS", "Berendsen / Parrinello-Rahman"],
      status: "Completed"
    },
    {
      phase: "Phase 4",
      title: "Unrestrained Production MD Run",
      description: "Executed hundreds of nanoseconds of unrestrained production simulation across multi-core Linux workstations to capture spontaneous membrane fluctuations and lipid diffusion.",
      toolsUsed: ["GROMACS", "CUDA HPC"],
      status: "In Analysis"
    },
    {
      phase: "Phase 5",
      title: "Trajectory Analysis & Python Pipelines",
      description: "Calculated area per lipid (APL), bilayer thickness, deuterium order parameters (Scd), and lateral diffusion coefficients using Python (MDAnalysis/NumPy/Matplotlib).",
      toolsUsed: ["Python", "MDAnalysis", "Matplotlib"],
      status: "Active"
    }
  ],
  keyMetrics: [
    { label: "Ensemble", value: "NPT (310 K, 1 bar)" },
    { label: "Water Model", value: "TIP3P Explicit" },
    { label: "Force Field", value: "CHARMM36m" },
    { label: "Time Step", value: "2.0 fs" }
  ]
};
