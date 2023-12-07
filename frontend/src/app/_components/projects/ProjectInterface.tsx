export interface project {
  id: number,
  title: string,
  icon: string | null,
  isOpenSource: boolean,
  link: {
    source: string | null,
    project: string | null,
  },
  techStacks: Array<string>,
  since: string,
  context: string
}

export interface projects {
  _count?: number
  data: Array<project>
}

export interface projectModal {
  isOpen: boolean,
  project: project | null
}