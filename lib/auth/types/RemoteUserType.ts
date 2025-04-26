export type RemoteUserType = {
  id: string;
  email: string | null;
  name: string | null;
  type: "educador" | "educando" | "colaborador";
  group: string | null;
  branch: "manada" | "rama" | "pioneros" | "rovers";
};
