import './SkillIcon.css'

function SkillIcon({ skill }) {
    return (
        <div className="skill-icon">
            <img src={skill.img} alt={`${skill.name} icon`} />
            <p>{skill.name}</p>
        </div>
    );
}

export default SkillIcon;