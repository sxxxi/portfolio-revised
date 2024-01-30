import styles from './skills.module.css'

interface SkillsProps {
  skills: Array<string>;
}

export default function Skills({ skills }: SkillsProps) {
  return <ul>
    {skills.map((value, index) => {
      return <li id={index.toString()}>{value}</li>
    })}
  </ul>
}