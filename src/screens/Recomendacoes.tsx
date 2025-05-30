import React, { useState } from 'react';
import {
    View, Text, Image, StyleSheet, ScrollView, TextInput, Button, KeyboardAvoidingView, Platform
} from 'react-native';
import { MatchService } from '../service/MatchService';
import { localItems } from '../data/localData';
import { Item } from '../types/item';

export default function RecomendacoesScreen() {
    const [query, setQuery] = useState('');
    const [localEncontrado, setLocalEncontrado] = useState<Item | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function buscarRecomendacao() {
        if (!query.trim()) {
            setError('Por favor, digite uma consulta válida.');
            setLocalEncontrado(null);
            return;
        }

        setLoading(true);
        setError(null);
        setLocalEncontrado(null);

        try {
            const resultado = await MatchService.getBestMatch(query);
            console.log('[Recomendacoes] Resultado da API:', resultado);

            const idExtraido = resultado?.numero_identificador;

            if (typeof idExtraido !== 'number') {
                setError('Resposta inválida da API: número identificador ausente ou inválido.');
                return;
            }

            const itemEncontrado = localItems.find((item) => Number(item.id) === idExtraido);

            if (itemEncontrado) {
                setLocalEncontrado(itemEncontrado);
            } else {
                setError(`Local com ID ${idExtraido} não encontrado no localData.ts`);
            }
        } catch (err) {
            setError('Erro ao buscar recomendação. Tente novamente.');
            console.error('Erro ao buscar recomendação:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua consulta aqui"
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={buscarRecomendacao}
                    returnKeyType="search"
                    editable={!loading}
                    autoCorrect={false}
                />
                <Button
                    title={loading ? 'Buscando...' : 'Buscar Recomendação'}
                    onPress={buscarRecomendacao}
                    disabled={loading}
                />

                {error && <Text style={styles.errorText}>{error}</Text>}

                {localEncontrado && (
                    <>
                        <Image
                            source={
                                typeof localEncontrado.image === 'string' ?
                                    { uri: localEncontrado.image } :
                                    localEncontrado.image
                            }
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Text style={styles.title}>{localEncontrado.title}</Text>
                        <Text style={styles.description}>{localEncontrado.description}</Text>
                        {localEncontrado.imageText && (
                            <Text style={styles.imageText}>{localEncontrado.imageText}</Text>
                        )}
                    </>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 44,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
        fontSize: 16,
    },
    errorText: {
        marginTop: 8,
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 340,
        borderRadius: 12,
        marginTop: 20,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
        fontFamily: 'AncizarSerif-Regular',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        fontFamily: 'AncizarSerif-Regular',
        color: '#444',
        textAlign: 'center',
        marginBottom: 8,
    },
    imageText: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'AncizarSans-Regular',
        textAlign: 'justify',
    },
});
