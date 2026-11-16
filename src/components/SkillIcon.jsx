import './SkillIcon.css'

function SkillIcon({ skill, img }) {
    const src = `../${img}`;
    return (
        <div className="skill-icon">
            <img src={img} alt={`${skill} icon`} />
            <p>{skill}</p>
        </div>
    );
}

export default SkillIcon;