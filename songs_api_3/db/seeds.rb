# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Song.destroy_all

Song.create!(
    {
        title: "La Traviata: Atto Primo",
        composer: "G. Verdi",
        date: "1853",
        image: "placeholder.png"
    }
)

Song.create!(
    {
        title: "Suite Bergamasque: Clair de Lune",
        composer: "C. Debussy",
        date: "1890",
        image: "placeholder.png"
    }
)