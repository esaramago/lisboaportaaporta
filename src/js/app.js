

(function() {
    const garbageTypes = [
        {
            id: 1,
            code: 'common',
            color: '#888888',
            description: 'Lixo comum',
            days: [2, 4, 6]
        },
        {
            id: 2,
            code: 'plastic',
            color: '#ffcd00',
            description: 'Plástico e metal',
            days: [3,7]
        },
        {
            id: 3,
            code: 'paper',
            color: '#0061ff',
            description: 'Papel',
            days: [5]
        },
    ]

    const now = new Date()
    const dayOfWeek = now.getDay() + 2

    const todayType = garbageTypes.find(type => type.days.includes(dayOfWeek))

    if (todayType) {
        document.getElementById('garbageContainer').style.fill = todayType.color
        document.getElementById('garbageCover').style.fill = todayType.color
        document.getElementById('garbageDescription').textContent = todayType.description
        document.body.style.backgroundColor = todayType.color + '20'
    } else {
        document.getElementById('leading').textContent = 'Hoje não há recolha'
        document.getElementById('garbageBin').style.opacity = '.2'
    }

})()