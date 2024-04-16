$(document).ready(function () {
  const wrapper = $("#wrapper");
  rocketData.forEach((rocket) => {

    const imageName = rocket.name.replace(/\s+/g, '_').toLowerCase();

    const card = $(`<div class="card">

        <div class="card-content">
            <div class="card-number">${rocket.group_letter}${rocket.number}</div>
            <div class="card-title">
                <div class="card-name">${rocket.name}${rocket.number}</div>
                <div class="card-group">${rocket.group}${rocket.number}</div>
            </div>
    
            <div class="rocket-image">
            <img src="images/${imageName}.jpg" alt="${rocket.name}">

            
            </div>
            <div class="goal-icon">Goal</div>
            <div class="rocket-info">${rocket.mission_goal}${rocket.number}</div>
    
            
            <div class="stat-icon">year built</div>
            <div class="stat-value">${rocket.year_built}${rocket.number}</div>
    
            <div class="stat-icon">mission duration</div>
            <div class="stat-value">${rocket.mission_duration}${rocket.number}</div>
    
            <div class="stat-icon">max speed</div>
            <div class="stat-value">${rocket.max_speed}${rocket.number}</div>
    
            <div class="stat-icon">max earth distance</div>
            <div class="stat-value">${rocket.max_earth_distance}${rocket.number}</div>
    
            <div class="stat-icon">development cost</div>
            <div class="stat-value">${rocket.development_cost}${rocket.number}</div>
    
            <div class="stat-icon">weight</div>
            <div class="stat-value">${rocket.weight}${rocket.number}</div>
    
        </div>
    </div>`);
    wrapper.append(card);
  });
});
