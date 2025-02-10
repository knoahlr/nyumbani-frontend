document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('[data-feature]');
    const featureContent = document.getElementById('feature-content');
    
    features.forEach(feature => {
        feature.addEventListener('click', function() {
            // Remove active class from all features
            features.forEach(f => {
                f.classList.remove('bg-blue-600', 'text-white');
                f.classList.add('bg-white', 'hover:bg-blue-50');
                const icon = f.querySelector('.feature-icon');
                icon.classList.remove('text-white');
                icon.classList.add('text-blue-600');
            });
            
            // Add active class to clicked feature
            this.classList.remove('bg-white', 'hover:bg-blue-50');
            this.classList.add('bg-blue-600', 'text-white');
            const icon = this.querySelector('.feature-icon');
            icon.classList.remove('text-blue-600');
            icon.classList.add('text-white');
            
            // Update content
            const featureData = JSON.parse(this.dataset.feature);
            featureContent.innerHTML = `
                <h3 class="text-2xl font-bold mb-4">${featureData.title}</h3>
                <p class="text-gray-600 mb-6">${featureData.description}</p>
                <div class="grid md:grid-cols-2 gap-6">
                    ${featureData.stats.map(stat => `
                        <div class="bg-blue-50 rounded-lg p-6">
                            <div class="text-sm text-gray-600">${stat.label}</div>
                            <div class="text-2xl font-bold text-blue-600">${stat.value}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        });
    });
    
    // Trigger click on first feature
    features[0].click();
});