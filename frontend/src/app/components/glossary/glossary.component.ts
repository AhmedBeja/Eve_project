import { Component } from '@angular/core';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class ViewGlossary {
  glossary = [
    { term: 'MW - mégawatt', definition: "Un mégawatt équivaut à 1 000 kilowatts (kW) ou à 1 000 000 watts (W). Le mégawatt est une unité de mesure de la puissance largement utilisée dans le domaine de l'énergie pour quantifier la capacité de production ou de consommation d'électricité et d'autres formes d'énergie. Par exemple: une centrale électrique au gaz naturel a une capacité de production de 500 MW. Cela signifie que cette centrale peut produire jusqu'à 500 mégawatts d'électricité lorsque tous ses générateurs sont en fonctionnement à pleine capacité." },
    { term: 'GW - gigawatt', definition: 'Un gigawatt équivaut à 1 000 000 kilowatts (kW) ou à 1 000 000 000 watts (W).' },
    {
      term: 'MWh - mégawattheure',
      definition: "Unité de mesure de l'énergie électrique, qui représente un million de watts d'énergie consommée ou produite pendant une heure. Le mégawattheure est une mesure importante pour comprendre la quantité totale d'électricité utilisée ou produite sur une période de temps donnée. Par exemple: Si une usine consomme 1 mégawatt de puissance électrique pendant 24 heures, elle aura consommé 24 mégawattheures d'énergie électrique."
      },
      {
      term: 'TWh - térawattheure',
      definition: "Unité de mesure de l'énergie électrique, qui représente un million de mégawatts d'énergie consommée ou produite pendant une heure."
      },
      {
      term: 'Centrale électrique',
      definition: "Une centrale électrique est une installation industrielle conçue pour générer de l'électricité à grande échelle. Son objectif principal est de convertir différentes formes d'énergie en électricité, qui peut ensuite être distribuée aux consommateurs finaux via un réseau de transmission et de distribution. Les centrales électriques varient en taille, capacité et technologie en fonction de la source d'énergie utilisée, des exigences de la région et des besoins en électricité."
      },
      {
      term: 'Turbine',
      definition: "Une turbine est un dispositif mécanique rotatif conçu pour convertir l'énergie d'un fluide en énergie mécanique ou électrique. Les turbines fonctionnent en exploitant la force du fluide en mouvement pour faire tourner leurs pales ou aubes."
      },
      {
      term: 'Turbine à gaz - TAG',
      definition: "Une turbine à gaz est un type de turbine utilisée pour convertir l'énergie chimique d'un combustible en énergie mécanique, qui est ensuite utilisée pour entraîner un générateur électrique, un compresseur ou un autre dispositif mécanique. On décompose le cycle de fonctionnement d’une TAG en 4 grandes étapes: Combustion, Expansion des gaz qui entraînent la rotation des pales de la turbine, Production d'énergie mécanique à l’aide d’un générateur électrique, Éjection des gaz de combustion."
      },
      {
      term: 'Turbine à vapeur - TAV',
      definition: "Une turbine à vapeur est un dispositif mécanique qui utilise la pression de la vapeur d'eau (en chauffant de l’eau à haute pression au sein d’une chaudière) pour produire de l'énergie mécanique en entraînant en rotation des pâles d’une turbine."
      },
      {
      term: 'CCG - Cycle combiné gaz',
      definition: "Une centrale à Cycle Combiné au Gaz utilise deux cycles de production d'électricité pour maximiser l'efficacité énergétique: un cycle à gaz et un cycle à vapeur. Dans la première phase, le gaz naturel est brûlé dans une turbine à gaz, produisant de l'énergie mécanique. La chaleur produite par la combustion du gaz est utilisée pour faire tourner la turbine et générer de l'électricité.Dans la deuxième phase, la chaleur résiduelle des gaz d'échappement de la turbine à gaz est récupérée pour produire de la vapeur. Cette vapeur est ensuite utilisée pour alimenter une turbine à vapeur supplémentaire, qui à son tour produit de l'électricité supplémentaire. Ce processus utilise l'énergie thermique restante pour produire de l'électricité supplémentaire, ce qui améliore l'efficacité globale de la centrale électrique."
      },
      {
        term: 'Combustion',
        definition: "La combustion est une réaction chimique entre un combustible (par exemple le bois, le charbon, le gaz naturel, les hydrocarbures…) et un comburant (généralement de l'oxygène de l'air) qui produit de la chaleur."
      },
      {
        term: 'Cellule photovoltaïque',
        definition: "Une cellule photovoltaïque, souvent simplement appelée cellule solaire, est un dispositif électronique qui convertit la lumière du soleil en électricité par le biais de l'effet photovoltaïque (lorsque la lumière du soleil (photons) frappe la surface d'une cellule photovoltaïque, elle excite les électrons dans le matériau semi-conducteur de la cellule, provoquant leur déplacement et la création d'un courant électrique.) Ces cellules sont les composants de base des panneaux solaires utilisés pour produire de l'électricité solaire."
      },
      {
        term: 'Alternateur',
        definition: "Un alternateur est un dispositif qui convertit l'énergie mécanique en énergie électrique (courant alternatif). Il fonctionne en utilisant l'induction électromagnétique pour générer un courant alternatif dans les bobines du stator (partie fixe de l’alternateur) pendant que le rotor tourne. Ce courant alternatif peut être utilisé directement ou converti en courant continu pour alimenter des équipements électriques."
      },
      {
        term: 'Générateur électrique',
        definition: "Un générateur électrique est un appareil qui convertit différentes formes d'énergie, comme l'énergie mécanique, solaire ou éolienne, en énergie électrique utilisable. Il produit un courant électrique continu ou alternatif, selon les besoins, pour alimenter des appareils électriques ou être distribué à travers un réseau électrique."
      },
      {
        term: 'Rendement / efficacité',
        definition: "Le rendement d'une centrale électrique est une mesure de son efficacité à convertir une forme d'énergie en électricité. Il représente le rapport entre l'énergie électrique produite par la centrale et l'énergie totale fournie à la centrale sous forme de combustible, de chaleur, de lumière solaire, de vent ou d'autres sources d'énergie."
      },
      {
        term: 'LCOE',
        definition: "Le LCOE, ou Levelized Cost of Electricity, est une mesure utilisée dans le domaine de l'énergie pour évaluer le coût de production de l'électricité par une source d'énergie spécifique sur la durée de vie de l'installation. Il est exprimé en €/MWh. Le LCOE prend en compte tous les coûts associés à la conception, la construction, le fonctionnement, la maintenance et le démantèlement de l'installation de production d'électricité, ainsi que les coûts financiers comme les taux d'intérêt et la durée de vie de l'installation. Il est calculé en répartissant ces coûts sur la production totale d'électricité prévue de l'installation au fil du temps."
      },
      {
        term: 'Facteur de charge',
        definition: "Le facteur de charge est une mesure utilisée dans le domaine de l'énergie pour évaluer l'efficacité d'une installation de production d'électricité sur une période donnée. Il représente la proportion du temps pendant lequel une installation fonctionne à pleine capacité par rapport au temps total pendant lequel elle pourrait fonctionner à pleine capacité."
      },
      {
        term: 'Énergie intermittente',
        definition: "Il s’agit des sources d'énergie qui ne produisent pas de façon constante ou prévisible. Cela signifie que la production d'électricité à partir de ces sources peut varier en fonction de facteurs externes tels que les conditions météorologiques, l'heure du jour ou de la nuit, ou d'autres paramètres environnementaux. Les principales sources d'énergie intermittente comprennent l'énergie solaire et l'énergie éolienne."
      },
  ];

  filteredGlossary = this.glossary; // Liste filtrée de termes initialement identique au glossaire

  applyFilter(filterValue: string): void {
    if (!filterValue) {
      this.filteredGlossary = this.glossary; // Si la barre de recherche est vide, affichez tous les termes
      return;
    }

    this.filteredGlossary = this.glossary.filter(item =>
      item.term.toLowerCase().includes(filterValue.toLowerCase())
    ); // Filtrer les termes en fonction du texte de recherche
  }
}
